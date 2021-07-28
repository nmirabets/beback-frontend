import axios from 'axios';

class ApiClient {
	constructor() {
		this.apiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	// AUTHENTICATION

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

	// RESTAURANTS

	// get all restaurants
	async findAllRestaurants() {
		return await this.apiClient.get('/restaurants/all').then( res => res.data.found )
  }

	// get user's restaurants
	async getUserRestaurants() {
    return await this.apiClient.get('/restaurants').then( res => res.data.found )
  }

	// create restaurant
	async postNewRestaurant(name) {
    return await this.apiClient.post('/restaurants', { name } ).then( res => res.data.created )
  }

	// update restaurant
	async putRestaurant( id, name ) {
    return await this.apiClient.put('/restaurants', { id, name }).then( res => res.data.found )
  }

	// delete restaurant
	async deleteRestaurant(id) {
    return await this.apiClient.delete('/restaurants', { data: { id }} ).then( res => res.data.deleted )
  }

	// MENUS

	// get menu by menuId
	async getMenu(menuId) {
    return await this.apiClient.post('/menus', { menuId }).then( res => res.data.found )
  }

	// get menus by restaurantId
	async getMenus(restaurantId) {
    return await this.apiClient.post('/menus/all', { restaurantId }).then( res => res.data.found )
  }

	// update menu
	async putMenu(id, name) {
    return await this.apiClient.put('/menus', { id, name }).then( res => res.data.found )
  }

	// create menu
	async postNewMenu(restaurantId, name) {
    return await this.apiClient.post('/menus/new', { restaurantId, name }).then( res => res.data.created )
  }

	// delete menu
	async deleteMenu(id) {
    return await this.apiClient.delete('/menus', { data: { id }} ).then( res => res.data.deleted )
  }

	// SECTIONS

	// get sections by menuId
  async getSections(menuId) {
    return await this.apiClient.post('/sections', { menuId }).then( res => res.data.found )
  }
	
	// update section
	async updateSection(id, name, position) {
		return await this.apiClient.put('/sections', { id, name, position }).then( res => res.data.found )
	}

	// create section
	async createSection(name) {
		return await this.apiClient.post('/sections/new', { name }).then( res => res.data.created )
	}

	// delete section
	async deleteSection(id) {
		return await this.apiClient.delete('/sections', { data: { id }} ).then( res => res.data.deleted )
	}

	// ITEMS

  async getItems(menuId) {
    return await this.apiClient.post('/items', { menuId }).then( res => res.data.found )
  }

	// REACTIONS
	async newReaction(reaction) {
    return await this.apiClient.post('/reactions', { data: reaction }).then( res => res.data.created )
  }

}

const apiClient = new ApiClient();

export default apiClient;
