export interface portfolioInfo {
  name: string;
  emails?: string[];
  phones?: string[];
  sections: section[];

}

export interface section {
    header: string
    topics: {
        title: string
        subTitle: string
        points: string[]
    }[]
}