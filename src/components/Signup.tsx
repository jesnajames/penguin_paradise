import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import Input from './ui/Input';
import Button from './ui/Button';
import Alert from './ui/Alert';

interface SignupProps {
  onSwitchToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        // You can add options here, like redirect URLs or metadata
        // options: {
        //   emailRedirectTo: 'http://localhost:5173/', // Or your production URL
        // }
      });

      if (error) throw error;

      // Check if user needs verification
      if (data.user && data.user.identities && data.user.identities.length === 0) {
         setMessage("Signup successful, but please contact support as your user identity couldn't be created.");
      } else if (data.user && !data.session) {
         setMessage('Signed up successfully. Please check your email for verification.');
      } else {
         setMessage('Signed up successfully! You are now logged in.');
         // AuthProvider will handle the state update
      }

      // Clear form - optional
      // setEmail('');
      // setPassword('');

    } catch (error: any) {
      setError(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-primary">Sign Up</h2>
      {error && <Alert type="error" message={error} onClose={() => setError(null)} />}
      {message && <Alert type="success" message={message} onClose={() => setMessage(null)} />}
      <form onSubmit={handleSignup} className="space-y-4">
        <Input
          label="Email"
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
        />
        <Input
          label="Password"
          id="signup-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="•••••••• (min. 6 characters)"
        />
        <Button type="submit" loading={loading} className="w-full" variant="primary">
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>
      <p className="text-sm text-center text-gray-600">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="font-medium text-secondary hover:underline">
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
