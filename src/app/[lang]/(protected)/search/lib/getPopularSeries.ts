import { Locale } from '@/src/types';

export const getPopularSeries = async (
  lang: Locale
): Promise<[Error?, []?]> => {
  try {
    const resp = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}&language=${lang}&sort_by=popularity.desc`
    );

    const { results } = await resp.json();

    return [undefined, results];
  } catch (error) {
    if (error instanceof Error) {
      return [error];
    }
  }

  return [new Error('Unknown error')];
};