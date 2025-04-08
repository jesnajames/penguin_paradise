import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import Input from './ui/Input';
import Button from './ui/Button';
import Alert from './ui/Alert';

interface LoginProps {
  onSwitchToSignup: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error: any) {
      setError(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-primary">Login</h2>
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
        />
        <Input
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
        />
        <Button type="submit" loading={loading} className="w-full" variant="primary">
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <p className="text-sm text-center text-gray-600">
        Don't have an account?{' '}
        <button onClick={onSwitchToSignup} className="font-medium text-secondary hover:underline">
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
