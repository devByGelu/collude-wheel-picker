# WheelPicker

WheelPicker component for Collude.

**API**
| Name                            | Description                                                                                                       | Required | default   |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------|----------|-----------|
| @Input() option: Option[ ]      | Options for the picker.                                                                                           | Yes      |           |
| @Input() windowLength: number   | Number of items to show in the wheelpicker. Must be an Odd number to position selected on the midddle.            | No       | 1         |
| @Input() btnMargin: number      | applies:     1. margin-bottom: {btnMargin}px 2. margin-top: {btnMargin}px  for up and down buttons respectively.  | No       | 10        |
| @Input() unit: string           | Adds a unit beside the selected option.                                                                           | No       | undefined |
| handleNewSelectedEvent() : Option | Returns the selected option.                                                                                      | Yes      |           |


1. ![image](https://user-images.githubusercontent.com/41291228/129440298-5a47d56e-c6cb-4de7-b47f-43543bfa8b95.png)
2. ![image](https://user-images.githubusercontent.com/41291228/129440317-44a7a8b4-00e4-4831-af6a-443ff6abfefb.png)
3. ![image](https://user-images.githubusercontent.com/41291228/129440342-78149dc5-8883-4954-8e39-bed9e0957142.png)

