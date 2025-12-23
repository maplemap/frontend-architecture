import { FormEvent, useState } from 'react';
import { Button } from 'shared/button';
import { useUserStore, UserBadge } from 'modules/user';
import './auth-panel.css';

export function AuthPanel() {
  const { user, login, logout } = useUserStore();
  const [name, setName] = useState('Demo Customer');

  if (user) {
    return (
      <div className="auth-panel">
        <UserBadge user={user} />
        <Button onClick={logout}>Log out</Button>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(name);
  };

  return (
    <form className="auth-panel" onSubmit={handleSubmit}>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <Button type="submit">Log in</Button>
    </form>
  );
}
