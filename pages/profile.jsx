import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

function Profile() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      {isLoading}
      {user && (
        <>
          <div className="profile">
            <img
              src={user.picture}
              alt="Profile"
              className="profile-picture"
              decode="async"
            />
          </div>
          <div>
            <h2 className="profile-name">{user.nickname}</h2>
            <p className="profile-email">{user.name}</p>
          </div>
          <div className="profile-json">{JSON.stringify(user, null, 2)}</div>
        </>
      )}
      {error}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
  onError: (error) => <div>Error!</div>,
});
