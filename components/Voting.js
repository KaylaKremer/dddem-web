import React from 'react';
import theme from "../theme/theme";

export function VotingEntry(props) {
    return (<section>
        <h2>{props.data.title}{(props.canVote) ?
            (<subtle>Add to shortlist</subtle>)
            :
            (<subtle><a href={props.loginLink}>Login to vote</a></subtle>)
        }</h2>
        <aside><emphasis>level: {props.data.level}</emphasis></aside>
        <details>{props.data.description}</details>
    </section>);
}

const VotingList = props => {
    return (
        <>
            <ul>
                {props.entries.map(entry => (
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

            h2>subtle{
                color:#B5C6C4;
            }
        `}
            </style></>);
};

export default VotingList;