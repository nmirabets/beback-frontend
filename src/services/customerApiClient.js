import axios from 'axios';

class CustomerApiClient {
	constructor() {
		this.customerApiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
		});
	}

	// RESTAURANTS

	// get all restaurants
	async findAllRestaurants() {
		return await this.customerApiClient.get('/restaurants/all').then( res => res.data.found )
  }

	// get user's restaurants
	async getUserRestaurants() {
    return await this.customerApiClient.get('/restaurants').then( res => res.data.found )
  }

	// MENUS

	// get menu by menuId
	async getMenu(menuId) {
    return await this.customerApiClient.post('/menus', { menuId }).then( res => res.data.found )
  }

	// get menus by restaurantId
	async getMenus(restaurantId) {
    return await this.customerApiClient.post('/menus/all', { restaurantId }).then( res => res.data.found )
  }


	// SECTIONS

	// get sections by restaurantId
  async getSections(restaurantId) {
    return await this.customerApiClient.post('/sections', { restaurantId }).then( res => res.data.found )
  }

	// ITEMS

  async getItems(restaurantId) {
    return await this.customerApiClient.post('/items', { restaurantId }).then( res => res.data.found )
  }

	// REACTIONS

	// create reaction
	async newReaction(reaction) {
    return await this.customerApiClient.post('/reactions', { data: reaction }).then( res => res.data.created )
  }

	// get dashboard data
	async getDashboardData(restaurantId) {
    return await this.customerApiClient.post('/reactions/data', { restaurantId }).then( res => res.data.found )
  }

}

const customerApiClient = new CustomerApiClient();

export default customerApiClient;
