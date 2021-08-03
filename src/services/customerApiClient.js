import axios from 'axios';

class CustomerApiClient {
	constructor() {
		this.customerApiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
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

	// load one restaurant
	async getRestaurant(restaurantId) {
    return await this.customerApiClient.post('/restaurants/load-one', { id: restaurantId }).then( res => res.data.found )
  }

	// MENUS

	// get active menus by restaurantId
	async getActiveMenus(restaurantId) {
    return await this.customerApiClient.post('/menus/active', { restaurantId }).then( res => res.data.found )
  }


	// SECTIONS

	// get sections by restaurantId
  async getSections(restaurantId) {
    return await this.customerApiClient.post('/sections', { restaurantId }).then( res => res.data.found )
  }

	// ITEMS

	// get active items by restaurantId
  async getActiveItems(restaurantId) {
    return await this.customerApiClient.post('/items/active', { restaurantId }).then( res => res.data.found )
  }

	// REACTIONS

	// create reaction
	async newReaction(reaction) {
    return await this.customerApiClient.post('/reactions', { reaction }).then( res => res.data.created )
  }

	// get dashboard data
	async getDashboardData(restaurantId) {
    return await this.customerApiClient.post('/reactions/data', { restaurantId }).then( res => res.data.found )
  }

}

const customerApiClient = new CustomerApiClient();

export default customerApiClient;
