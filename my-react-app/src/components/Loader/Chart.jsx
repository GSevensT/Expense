import { 
	ChartSkeleton, 
	ChartSkeletonWrapper, 
	ChartSkeletonList,
	ChartSkeletonItem,
} from "../App.styled";

export const ChartLoader = () => {
	return(
		<ChartSkeletonWrapper>
			<ChartSkeleton />
			<ChartSkeletonList>
				<ChartSkeletonItem />
				<ChartSkeletonItem />
				<ChartSkeletonItem />
				<ChartSkeletonItem />
				<ChartSkeletonItem />
			</ChartSkeletonList>
		</ChartSkeletonWrapper>
	);
}