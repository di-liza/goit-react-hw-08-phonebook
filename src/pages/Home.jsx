import { Container } from 'components';
import React from 'react';

function Home() {
  return (
    <Container>
      <h1 style={{ marginTop: 100 }}>Welcome to the phone book! </h1>
      <p>
        This is a beautifully designed phonebook app that saves contacts
        securely. Register to create your collection of phone numbers.
      </p>
      {/* <p>App Features:</p>
      <ol style={{ textAlign: 'left', margin: '0 auto' }}>
        <li>
          <p>
            Sleek Design: The app boasts an aesthetically pleasing interface,
            ensuring a visually appealing user experience.
          </p>
        </li>
        <li>
          <p>
            Secure Data Storage: Your contacts are saved with top-level security
            measures, keeping your information safe and private.
          </p>
        </li>
        <li>
          <p>
            User Registration: By registering an account, you gain access to
            personalized features and the ability to manage your phonebook
            efficiently.
          </p>
        </li>
      </ol> */}
      <p>
        Experience the convenience and reliability of our phonebook app. Start
        organizing your contacts today!"
      </p>
    </Container>
  );
}

export default Home;
