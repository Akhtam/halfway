import React from 'react';
import { Item, Divider } from 'semantic-ui-react';

const Results = ({imageUrl, name, description}) => (
  <Item.Group>
    <Divider section />
    <Item>
    <Item.Image size='tiny' src={imageUrl} />
    <Item.Content>
      <Item.Header as='a'>{name}</Item.Header>
      <Item.Meta>Description</Item.Meta>
      <Item.Extra>{description}</Item.Extra>       
    </Item.Content>
    </Item> 
  </Item.Group>
)

export default Results;