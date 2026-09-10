/*
 * Provides typed data-access helpers for retrieving categories from SQLite.
 */

import { asc } from 'drizzle-orm';
import { categories } from '../../db/schema';
import type { Category } from '../types/game';
import type { Database } from './db';

/**
 * Returns all categories ordered alphabetically by name.
 *
 * @param db - Injectable Drizzle database instance.
 * @returns A list of categories containing each category's id and name.
 */
export async function getAllCategories(db: Database): Promise<Category[]> {
    return db
        .select({ id: categories.id, name: categories.name })
        .from(categories)
        .orderBy(asc(categories.name));
}
