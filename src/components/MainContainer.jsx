import styled from 'styled-components';

const MainContainer = styled.div`
  max-width: 1200px; /* Adjust this based on your design */
  margin: 0 auto; /* Center horizontally */
  padding: 20px; /* Add some padding */
  width: 100%; /* Full width on smaller screens */

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }
`;

export default MainContainer;
