import React from 'react';

import { QDragMoveEvent, QMouseEvent, QIcon } from '@nodegui/nodegui';
import { RNWidget } from '@nodegui/react-nodegui/dist/components/config';
import { Button, hot, Text, View, Window } from '@nodegui/react-nodegui';

import bookStack from '../assets/bookStack.png';

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(bookStack);

const App: React.FC = () => {
  return (
    <Window
      windowIcon={winIcon}
      windowTitle="Alexandrie"
      minSize={minSize}
    >
      <View style={viewStyle}>
        <Text style={viewContentStyle} wordWrap={true}>
          Welcome to alexandrie
        </Text>
      </View>
    </Window>
  );
};

const viewStyle = `
  flex: 1;
  font-family: arial;
  background: #0e1a40;
`;

const viewContentStyle = `
  color: #ffffff;
  font-size: 3em;
  text-align: center;
  width: 100%;
`;

export default hot(App);
