import Dropdown from '../Dropdown'
import SearchIcon from '../Icons/SearchIcon'

const OrderBySelect = () => {
    return (
        <div className="flex items-center">
            <SearchIcon width={16} height={16} />
            <Dropdown />
        </div>
    )
}
export default OrderBySelect
