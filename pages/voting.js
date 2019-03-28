import Layout from '../components/Layout.js'
import Header from "../components/Header";
import VotingList from "../components/Voting";
import theme from "../theme/theme";
import Head from "next/head";
import votingdata from '../utils/votingdata.js';

const votingpage = props => {
    return (
        <Layout>
            <Head>
                <title>Voting</title>
            </Head>
            <Header title={'How it works'} />
            <section>
                <h1>To submit your shortlist</h1>
                <ol>
                    <li><a href={props.loginLink}>login to EventBrite here</a></li>
                    <li>Tap the star next to your favourite talks (upto 10)</li>
                    <li>Press Submit</li>
                </ol>
            </section>
            <VotingList canVote={props.canVote} loginLink={props.loginLink} />
            <style jsx>
                {`

            section {
                max-width: ${ theme.sizes.maxContentWidth};
                padding: ${ theme.sizes.contentPadding};
                margin: auto;
            }
        `}
            </style>
        </Layout>
    )
}

votingpage.getInitialProps = async function ({ req }) {
    const canVote = req.headers['cookie'].split(';').find(i => i.length > 7 && i.trim().substr(0, 7) == "voteid=") != undefined;
    const response = {
        canVote:canVote,
        loginLink:`https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=${votingdata.clientToken}&redirect_uri=${votingdata.callbackpage}`
    }
    return response;
}

export default votingpage;