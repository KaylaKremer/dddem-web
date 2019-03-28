import React from 'react';
import theme from "../theme/theme";
import votingdata from '../utils/votingdata';

export function VotingEntry(props) {
    return (<section>
        <h2>{props.data.Title}{(props.canVote) ?
            (<subtle>Add to shortlist</subtle>)
            :
            (<subtle><a href={props.loginLink}>Login to vote</a></subtle>)
        }</h2>
        <aside><emphasis>level: {props.data.Level}</emphasis></aside>
        <details>{props.data.Description}</details>
    </section>);
}

const VotingList = props => {
    return (
        <>
            <ul>
                {votingdata.entries.map(entry => (
                    <li><VotingEntry data={entry} canVote={props.canVote} loginLink={props.loginLink} /></li>
                ))}
            </ul>
            <style jsx>
                {`
            subtle{
                float:right;
                color:#7F0000;
            }

            ul>li>section {
                max-width: ${ theme.sizes.maxContentWidth};
                padding: ${ theme.sizes.contentPadding};
                margin: auto;
            }
        `}
            </style></>);
};

export default VotingList;