export class Projects {
    public id: number
    public title: string;
    public category: string;
    public summary: string;
    public detail: string;
    public billingType: string;
    public status: string;

    constructor(
        id: number,
        title: string,
        category: string,
        summary: string,
        detail: string,
        billingType: string,
        status: string
    ) {
        this.id = id
        this.title = title
        this.category = category
        this.summary = summary
        this.detail = detail
        this.billingType = billingType
        this.status = status
    }
}