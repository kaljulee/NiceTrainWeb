import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { Authenticator, SignIn } from 'aws-amplify-react';
import NiceTrainPage from '../NiceTrainPage';

// function SignInAuthenticator(props) {
//   return (
//     <Authenticator hideDefault>
//       <Gre />
//     </Authenticator>
//   );
// }

function AdminPage(props) {
  return (
    <NiceTrainPage>
      <div style={{ width: '100%', height: '10vh' }}>admin page</div>
      <AmplifySignOut />
    </NiceTrainPage>
  );
}

export default withAuthenticator(AdminPage);
