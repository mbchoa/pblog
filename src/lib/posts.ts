import { getCollection } from 'astro:content';
import { formatInTimeZone } from 'date-fns-tz';

export const postTitle = (date: Date) =>
  formatInTimeZone(date, 'America/Los_Angeles', "MMMM do 'at' h:mmaaa");

export const getPosts = async () =>
  (await getCollection('posts')).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
