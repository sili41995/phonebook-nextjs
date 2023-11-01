import { getAuthPages } from '@/utils';

const getIsAuthPage = (path) => getAuthPages().includes(path);

export default getIsAuthPage;
