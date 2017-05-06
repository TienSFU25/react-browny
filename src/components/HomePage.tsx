import * as React from 'react';

import River from './River';
import SportsRiverSection from './SportsRiverSection';
import { GetTopStories } from '../api/fetcher';
import cardMap from '../config/cardMap';
import InfiniteList from './InfiniteList';
import { CellMeasurer, CellMeasurerCache, Grid, List, InfiniteLoader, WindowScroller } from 'react-virtualized';

// In this example, average cell height is assumed to be about 50px.
// This value will be used for the initial `Grid` layout.
// Width is not dynamic.
const cache = new CellMeasurerCache({
  defaultHeight: 374,
  fixedWidth: true
});

const list = [];

interface HomePageProps { }

const riverTypes = ['1a', '1b', '2a', '3a', '8a', '8b'];
const riverCards = [1, 1, 2, 3, 8, 8];

export default class HomePage extends React.Component<HomePageProps, any> {
    constructor() {
        super();

        this.state = {
            stories: [],
            renderTypes: [],
            riverStories: [],
            cols: 1
        };
    }

    isRowLoaded ({ index }) {
        const { riverStories } = this.state; 
        // console.log(`row ${index} is loaded: ${riverStories[index] !== undefined}`)
        return riverStories[index] !== undefined;
    }

    loadMoreRows ({ startIndex, stopIndex }) {
        console.log(`loading more rows from ${startIndex} to ${stopIndex}`);
        return GetTopStories().then((response) => {
            const stories = JSON.parse(response).value;
            const { renderTypes, riverStories } = this.loadStoriesIntoRivers(stories, 0);

            // mergy
            const newStories = this.state.stories.concat(stories);
            const newRenderTypes = this.state.renderTypes.concat(renderTypes);
            const newRiverStories = this.state.riverStories.concat(riverStories);

            this.setState({
                stories: newStories,
                renderTypes: newRenderTypes,
                riverStories: newRiverStories
            });
        });
    }
    
    rowRenderer ({ index, isScrolling, key, parent, style }) {
        // console.log(`rendering row ${index}`);
        const { renderTypes, riverStories } = this.state; // This comes from your list data
        const r = renderTypes[index];
        const stories = riverStories[index];

        return (
            <CellMeasurer
            cache={cache}
            columnIndex={0}
            key={index}
            parent={parent}
            rowIndex={index}
            >
            {({ measure }) => (
                // 'style' attribute required to position cell (within parent List)
                <div style={style}>
                     <River renderType={r} columns={1} stories={stories} key={index} index={index}/>
                </div>
            )}
            </CellMeasurer>
        );
    }

    updateDimensions() {
        // console.log(this.state.colType);
        var widthRem = window.innerWidth / 10 * 0.625 + 1;

        if (widthRem < 43.75) {
            this.setState({
                cols: 1
            });
        } else if (widthRem < 58.875) {
            this.setState({
                cols: 2
            });
        } else if (widthRem < 79) {
            this.setState({
                cols: 3
            });
        } else {
            this.setState({
                cols: 4
            });
        }        
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    loadStoriesIntoRivers(stories, start, end = start + 100) {
        let renderTypes = [];
        let riverStories = [];
        let n = 0;
        let count = 0;
        let relevantStories = stories.slice(start, end);

        while (n < relevantStories.length) {
            let k = Math.floor(Math.random() * (riverTypes.length - 1));
            let riverType = riverTypes[k];
            let nCards = riverCards[k];

            renderTypes.push(riverType);
            riverStories.push(relevantStories.slice(n, n + nCards));

            n += nCards;
            count += 1;
        }

        return { renderTypes, riverStories };
    }

    componentWillMount() {
        this.updateDimensions();
        this.loadMoreRows({ startIndex: 0, stopIndex: 100 });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        console.log(`render was run`);
        const { riverStories, cols } = this.state;

        return (
            <InfiniteLoader
                isRowLoaded={this.isRowLoaded.bind(this)}
                loadMoreRows={this.loadMoreRows.bind(this)}
                rowCount={50000}
            >
                {({ onRowsRendered, registerChild }) => (
                    <WindowScroller>
                        {({ height, isScrolling, scrollTop }) => (
                        <List
                            autoHeight
                            height={height}
                            onRowsRendered={onRowsRendered}
                            ref={registerChild}
                            width={window.innerWidth}
                            rowCount={riverStories.length}
                            deferredMeasurementCache={cache}
                            rowHeight={cache.rowHeight}
                            rowRenderer={this.rowRenderer.bind(this)}
                        />
                        )}
                    </WindowScroller>
                )}
            </InfiniteLoader>
        );
    }
}