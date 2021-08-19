import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from '@emotion/styled';
import { AdminTitle, Box } from '../../../components/layoutComponents';

const ListItem = styled.div({
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white'
});

const List = styled(Box)`
  background-color: grey;
`;

function DnDListItem(props) {
  const { item, labelField } = props;
  return (
    <Draggable draggableId={`${item.id}`} index={item.order}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item[labelField]}
        </ListItem>
      )}
    </Draggable>
  );
}

function DnDList(props) {
  const { listData, labelField } = props;
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <List ref={provided.innerRef} {...provided.droppableProps}>
          {listData.map((datum) => (
            <DnDListItem key={datum.id} item={datum} labelField={labelField} />
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  );
}

function AdminDnD(props) {
  const { listData, labelField } = props;
  return (
    <Box>
      <DragDropContext>
        <DnDList listData={listData} labelField={labelField} />
      </DragDropContext>
    </Box>
  );
}

AdminDnD.defaultProps = {
  listData: [
    { label: 'ham', id: 1, order: 1 },
    { label: 'snax', id: 2, order: 2 },
    { label: 'snakes', id: 3, order: 3 }
  ],
  labelField: 'label',
  title: 'Default Title'
};

export default AdminDnD;
