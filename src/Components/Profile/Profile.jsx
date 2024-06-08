import { profileURL, userName, userRole } from "../../utils/profile";

// We can export functional components in the same line
export default function Profile() {
  return (
    <section className="profile--container">
      <figure className="profile--container__image">
        <img src={profileURL} alt="Profile" />
      </figure>
      <div className="profile--container__details">
        <h1>{userName}</h1>
        <p>{userRole}</p>
      </div>
    </section>
  );
}
