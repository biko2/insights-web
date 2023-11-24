import { Blockquote } from './Blockquote';
import { ItemList } from './ItemList';
import { Link } from './Link';
import { Paragraph } from './Paragraph';
import { SecondaryTitle } from './SecondaryTitle';

export const blogTags = {
  h2: SecondaryTitle,
  a: Link,
  p: Paragraph,
  blockquote: Blockquote,
  ul: ItemList,
};
