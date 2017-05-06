import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CellMeasurer, CellMeasurerCache, Grid, List } from 'react-virtualized';

// List data as an array of strings
const list = [
  'http://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBANlfs.img',
  'http://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBAN8Te.img'
];

// In this example, average cell height is assumed to be about 50px.
// This value will be used for the initial `Grid` layout.
// Width is not dynamic.
const cache = new CellMeasurerCache({
  defaultHeight: 50,
  fixedWidth: true
});

function rowRenderer ({ index, isScrolling, key, parent, style }) {
  const source = list[index]; // This comes from your list data

  return (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      parent={parent}
      rowIndex={index}
    >
      {({ measure }) => (
        // 'style' attribute required to position cell (within parent List)
        <div style={style}>
          <img
            onLoad={measure}
            src={source}
          />
        </div>
      )}
    </CellMeasurer>
  );
}
export default class River extends React.Component<any, any> {
    render() {
        return (
            <List
                width={300}
                height={300}
                rowCount={list.length}
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                rowRenderer={rowRenderer}
            />
        );
    }
}