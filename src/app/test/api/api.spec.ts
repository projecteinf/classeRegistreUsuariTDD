import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Api } from "../../services/api";
import { provideHttpClient } from "@angular/common/http";

describe('Get cats', () => {
    let apiService: Api;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                Api,
                provideHttpClient(),
                provideHttpClientTesting()
            ]
        });
        apiService= TestBed.inject(Api);
        httpTestingController=TestBed.inject(HttpTestingController);
    });

    it('Get cats data', () => {
        const dummyData = [ {
            _id:"Lildd",
            mimety:"image/png",
            size: 550,
            tags: []
        }];
        
        apiService.getCats(5).subscribe(data => {
            expect(data).toEqual(dummyData);
        });

        const req = httpTestingController.expectOne("https://cataas.com/api/cats?limit=5");

        expect(req.request.method).toBe('GET');
        req.flush(dummyData);
    })


});
