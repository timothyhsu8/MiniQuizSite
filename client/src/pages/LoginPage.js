// import React from 'react';
// import { TextInput } from 'react-native-paper';

// class LoginPage extends React.Component {
//   constructor(props) {
//     super(props);
//     // Don't call this.setState() here!
//     this.state = { pulledData: false };
//     //this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidUpdate(pulledData) {
//     // Typical usage (don't forget to compare props):
//     if (!pulledData) {
//       fetch('/api/quizs')
//         .then((res) => res.json())
//         .then((data) => console.log(data));
//       pulledData = true;
//     }
//   }

//   render() {
//     return (
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//     );
//   }
// }

// export default LoginPage;
