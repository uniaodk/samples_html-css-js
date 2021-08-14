# Responsive 

Has many CSS framework that use layout, grid and flexbox. This examples I used the [Bootstrap 5](https://getbootstrap.com/). Some features can't work in some specific browsers, then you search on [Can I Use](https://caniuse.com/)

## Sample 1

- Mobile first on style
- `@media` can be screen or print

## Sample 2

- Grid System Bootstrap [Compiled CSS and JS](https://getbootstrap.com/)
- .min is more efficient (less lines)
- must follow that sequence of class -> `container`, `row` and `col`;

## Sample 3

- Flex box Bootstrap [Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Use `display: flex`
- `flex-direction` - row (default), row-reverse, column, column-reverse`
- `flex-wrap` - wrap (default), nowrap, wrap-reverse
- `flex-basis` - kind of width of component, auto configure if nowrap
- `flex-flow` - combination of `flex-direction` and `flex-wrap`
- `justify-content` - its apply only on `flex-direction`, flex-start (default), flex-end, flex-center and and others with space...
- `align-items` - its apply only on inverse axis of `flex-direction`, stretch (default), flex-start, end, center and baseline (that align with the text);
- `align-content`- remove space between the components on wrap condition, parent component must has a width. strech (default), flex-start, end, center and others with space...
- `order` - order the component with assign index. Default value is 0.
- `flex-grow` - grow the component with the space that left in line. Default value is 0, more the value grow, more space the component get from left space.
- `flex-shrink` - shrink the component with the space that exceed parent width component. Default value is 1, more the value grow, more width component shrink.
- `flex` - combination of `flex-grow`, `flex-shrink` and `flex-basis`. Default value is `0 1 auto`. Its more complex to control the result.
- `align-self` - allow to overridden for individual flex`align-items`.
