function IndexPlanets() {
    return null;
}

export async function getStaticProps() {
    return {
        redirect: {
            destination: `/`,
            permanent: false,
        },
    }
}

export default IndexPlanets;
