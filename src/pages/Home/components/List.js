import Item from './Item'

const arr = [1, 2, 3, 1]

const List = ({listData}) => {
    console.log('listdata', listData)
    return <div>
        {
            listData.map(item => <Item key={item}/>)
        }
    </div>
}

export default List