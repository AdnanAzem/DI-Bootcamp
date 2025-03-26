const UserFavoriteAnimals = (props) => {
    console.log(props);
    const {favAnimals} = props;

    return (
        <>
        {favAnimals.map((animal, index) => (
            <ul>
                <li key={index}>{animal}</li>
            </ul>
            ))
        }
        </>
    )
}

export default UserFavoriteAnimals