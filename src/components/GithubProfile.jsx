import { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('https://api.github.com/users/github-john-doe')
      .then(response => {
        setProfile(response.data);
      })
  }, []);

  if (!profile) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container text-center my-5">
      <h1 className='pt-5'>Github user</h1>
      <h2>{profile.name}</h2>
      <img src={profile.avatar_url} alt={`Photo de profil de ${profile.name}`} className="rounded-circle my-4 profile-avatar" />
      <p>{profile.bio}</p>
      <p>Abonnés : {profile.followers}</p>
      <p>Abonnements : {profile.following}</p>
      <p>Créé le : <time dateTime={profile.created_at}>{new Date(profile.created_at).toLocaleString()}</time></p>
      <p>Modifié le : <time dateTime={profile.updated_at}>{new Date(profile.updated_at).toLocaleString()}</time></p>
      <p>URL repositories : 
        <a href={profile.repos_url} target="_blank" rel="noopener noreferrer" className="text-primary">{profile.repos_url}</a>
      </p>
    </div>
  );
}

export default GitHubProfile;
