import type { User } from 'modules/user';
import './user-badge.css';

type UserBadgeProps = {
  user: User;
};

export function UserBadge({ user }: UserBadgeProps) {
  const initials = user.name.slice(0, 1).toUpperCase();

  return (
    <div className="user-badge">
      <span className="user-badge__avatar">{initials}</span>
      <div>
        <p className="user-badge__name">{user.name}</p>
        <p className="user-badge__role">{user.role}</p>
      </div>
    </div>
  );
}
