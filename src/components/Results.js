import React from 'react';
import { Item, Divider, Rating } from 'semantic-ui-react';

const Results = ({
  image_url,
  name,
  categories,
  location,
  url,
  rating,
  display_phone
}) => (
  <Item.Group className="list">
    <Item>
      <Item.Image size="small" src={image_url} />
      <Item.Content>
        <Item.Header as="a" href={url} target="_blank" rel="noopener">
          {name}
        </Item.Header>
        <Item.Meta>
          <h4>
            {`${location.address1} ${location.address2} ${location.city}`}
          </h4>
        </Item.Meta>
        <Item.Meta>{display_phone}</Item.Meta>
        <Item.Meta>
          <Rating
            icon="star"
            color="red"
            defaultRating={rating}
            maxRating={5}
            size="tiny"
            disabled
          />
        </Item.Meta>
        <Item.Extra>
          <span style={{ color: '#57a8a6' }}>{categories[0].alias}</span>
        </Item.Extra>
      </Item.Content>
    </Item>
    <Divider section />
  </Item.Group>
);

export default Results;
