interface BannerProps  {
    bannerContainer: string,
    bannerTitle: string,
}

export default function Banner({
    bannerContainer,
    bannerTitle,
}: BannerProps) {
    return <div className={bannerContainer}>
        <h1 className={bannerTitle} >[Turn It Up Lessons...]</h1>
    </div>
}