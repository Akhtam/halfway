import React from 'react';
import { Item, Divider, Icon } from 'semantic-ui-react';


const Results = ({image_url, name, categories, location, url, rating}) => (

  <Item.Group>
    <Item>
    <Item.Image size='tiny' src={image_url} />
    <Item.Content>
      <Item.Header as='a'>{name}</Item.Header>
      <Item.Meta><h4>{`${location.address1} ${location.address2} ${location.city}`}</h4></Item.Meta>
      <Item.Meta>
         Rating: {rating} 
         <Icon color='yellow' name='star'/>
      </Item.Meta>
      <Item.Extra>{categories[0].alias}</Item.Extra>       
    </Item.Content>
    </Item> 
    <Divider section />
  </Item.Group>
)

export default Results;