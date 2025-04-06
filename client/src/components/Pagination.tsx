import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  setCurrentPage,
  data,
  currentPage,
}: {
  setCurrentPage: any;
  data: any;
  currentPage: any;
}) => {
  return (
    <div className="flex justify-center gap-4 mb-4 mt-3">
      <Button
        disabled={data?.previous === null}
        variant={"outline"}
        size={"sm"}
        onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
      >
        <ChevronLeft />
      </Button>
      <span className="font-medium">
        {currentPage} / {Math.ceil(data?.total / 10)}
      </span>
      <Button
        disabled={data?.next === null}
        variant={"outline"}
        size={"sm"}
        onClick={() => setCurrentPage((prev: any) => prev + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
