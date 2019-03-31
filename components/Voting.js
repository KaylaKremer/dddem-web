import React, { useRef } from 'react';
import theme from "../theme/theme";

export function VotingEntry(props) {
    const toggle = useRef(null);
    const toggleSelection = async (id) => {
        toggle.current.innerText = "Remove from shortlist";
        toggle.current.disabled = "disabled";
        alert(id);
        toggle.current.disabled = "";
    }

    return (<section>
        <h2>{props.data.title}{(props.canVote) ?
            (<subtle><a ref={toggle} onClick={() => toggleSelection(props.data.id)}>Add to shortlist</a></subtle>)
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