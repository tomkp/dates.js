
# Dates.js

  Simple javascript date parser / formatter.

  Minifies to < 3k.


## Examples

### Parsing a date

  ```Dates.parse("12/03/2009 18:02", "dd/MM/yyyy HH:mm");```

### Formatting a date

  ```Dates.format(new Date(2010, 3, 14, 18, 02, 39, 123), "yyyy-MM-ddTHH:mm:ss.SSS");```


### Formatting

  ```y```: Year eg: ```1996```, ```96```
  ```M```: Month in year eg: ```July```, ```Jul```, ```07```
  ```d```: Day in month eg: ```10```
  ```E```: Day in week eg: ```Tuesday```, ```Tue```
  ```H```: Hour in day (0-23) eg: ```9```
  ```m```: Minute in hour eg: ```30```
  ```s```: Second in minute eg: ```55```
  ```S```: Millisecond eg: ```978```


