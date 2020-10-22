import React from 'react';

const ActiveUserContext = React.createContext({ activeUser: null, setActiveUser: null });

export default ActiveUserContext;