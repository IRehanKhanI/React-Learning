import PropTypes from "prop-types";
function List({ category = "Category", items }) {
    const itemList = items;

    const listitems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>{item.cal}</b>
        </li>
    ));

    return (
        <>
            <h3>{category}</h3>
            <ol>{listitems}</ol>
        </>
    );
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        cal: PropTypes.number
    }))

}


export default List;
