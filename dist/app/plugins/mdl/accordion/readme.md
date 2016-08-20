```html
            <oe-accordion>
                <accordion-item class="active" md-icon="filter_drama" md-badge="1" md-badge-overlap="true"
                                md-divider="true">Item Title
                </accordion-item>
                <accordion-group md-icon="place" md-badge="1" md-badge-overlap="true" md-divider="false">
                    <accordion-group-heading>Groupd Title</accordion-group-heading>
                    <accordion-item *ngFor="let item of [1,2,3,4,5,6,7]" [md-badge]="item">{{item}}</accordion-item>
                </accordion-group>
                <accordion-group md-icon="place" md-divider="false" md-divider="false">
                    <accordion-group-heading>Groupd Title</accordion-group-heading>
                    <accordion-item *ngFor="let item of [1,2,3,4,5,6,7]" [md-badge]="item">{{item}}</accordion-item>
                </accordion-group>
                <accordion-group md-icon="place" md-badge="1" md-badge-overlap="false" md-divider="false">
                    <accordion-group-heading>Groupd Title</accordion-group-heading>
                    <accordion-item *ngFor="let item of [1,2,3,4,5,6,7]" [md-badge]="item">{{item}}</accordion-item>
                </accordion-group>
            </oe-accordion>
```


### Elements and Attributes

### <oe-accordion>
the wrapper of the accordion
### <accordion-item>
items of the accordion (heading)
* **md-icon**  defines the material design icon to be used
* **md-badge**  defines a badge to be displayed on upper right of the accordion item heading (if md-icon is specified, it will be displayed on upper right of the icon, otherwise it will be displayed on upper right of the heading text)
* **md-badge-overlap**  defines whether the badge will overlap above the icon or heading text
* **md-divider**  defines whether to display a divider below the item
### <accordion-group>
groupped item in the accordion
* **md-icon**  defines the material design icon to be used
* **md-badge**  defines a badge to be displayed on upper right of the accordion item heading (if md-icon is specified, it will be displayed on upper right of the icon, otherwise it will be displayed on upper right of the heading text)
* **md-badge-overlap**  defines whether the badge will overlap above the icon or heading text
* **md-divider**  defines whether to display a divider below the item
### <accordion-group-heading>
heading used under <accordion-group> element