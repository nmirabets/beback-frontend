import axios from 'axios';

class ApiClient {
	constructor() {
		this.apiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	// Authentication

	async me() {
		return await this.apiClient.get('/whoami').then(response => response.data);
	}

	async signup(user) {
		const { username, password } = user;
		return await this.apiClient.post('/signup', { username, password }).then(({ data }) => data);
	}

	async login(user) {
		const { username, password } = user;
		return await this.apiClient.post('/login', { username, password }).then(({ data }) => data);
	}

	async logout() {
		return await this.apiClient.post('/logout', {}).then(response => response.data);
	}

	// # Customer APIs

	// Restaurants

	async findAllRestaurants() {
		return await this.apiClient.get('/restaurants/all').then( res => res.data.found )
  }

	// Menus

	async getMenu(menuId) {
    return await this.apiClient.post('/menus/', { menuId }).then( res => res.data.found )
  }

	// Sections

  async getSections(menuId) {
    return await this.apiClient.get(`/sections/${menuId}`).then( res => res.data.found )
  }

	// Items

  async getItems(menuId) {
    return await this.apiClient.get(`/items/${menuId}`).then( res => res.data.found )
  }

	// Reactions
	async newReaction(reaction) {
    return await this.apiClient.post('/reactions/', { data: reaction }).then( res => res.data.created )
  }

	// # Manager APIs

	// User Restaurants
	async getUserRestaurants() {
    return await this.apiClient.get('/restaurants/').then( res => res.data.found )
  }

	// Menus
	async getMenus(restaurantId) {
    return await this.apiClient.post('/menus/all', { restaurantId }).then( res => res.data.found )
  }

	// Restaurant menus
	async getReactionsData(restaurantId) {
    return await this.apiClient.post('/menus/', { restaurantId }).then( res => res.data.found )
  }

	// Update Restaurant
	async putRestaurant( id, name ) {
    return await this.apiClient.put('/restaurants/', { id, name }).then( res => res.data.found )
  }
	
	// Manager Restaurant Data
	async getManagerData() {
    return await this.apiClient.post('/reactions/').then( res => res.data.created )
  }

}

const apiClient = new ApiClient();

export default apiClient;
