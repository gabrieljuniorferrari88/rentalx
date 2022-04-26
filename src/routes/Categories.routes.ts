import { Router } from 'express';

import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];
categoriesRoutes.get('/', (request, response) => {
	const data = categories;
	return response.status(201).json({ data });
});

categoriesRoutes.post('/', (request, response) => {
	const { name, description } = request.body;

	const category = new Category();

	Object.assign(category, {
		name,
		description,
		created_at: new Date(),
	});

	categories.push(category);

	return response.status(201).json({ categories });
});

export { categoriesRoutes };
