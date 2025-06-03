import YearHeader from './YearHeader';
import { getAvailableCourseYears } from '@/lib/courseService';

export default async function YearHeaderWrapper() {
  const courseYearLinks = await getAvailableCourseYears();
  return <YearHeader courseYearLinks={courseYearLinks} />;
}