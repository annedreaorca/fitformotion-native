// import { auth } from "@clerk/nextjs";
// import prisma from "@/prisma/prisma";
// import { Prisma } from "@prisma/client";
import PageHeading from "@/components/PageHeading/PageHeading";
// import { WorkoutPlan } from "@prisma/client";

type Exercise = {
  id: string;
  name: string;
  category: string;
};

type WorkoutPlanExercise = {
  Exercise: Exercise;
  order: number | null;
  sets: number;
};

// type ExtendedWorkoutPlan = WorkoutPlan & {
//   WorkoutPlanExercise: WorkoutPlanExercise[];
// };

export default async function WorkoutPage() {
  // const { userId }: { userId: string | null } = auth();

  // if (!userId) {
  //   throw new Error("You must be signed in to view this page.");
  // }

  // const whereClause: Prisma.WorkoutPlanWhereInput[] = [
  //   { isSystemRoutine: true },
  // ];

  // if (userId && typeof userId === "string") {
  //   whereClause.push({
  //     userId: userId,
  //   });
  // }

  // const routines: ExtendedWorkoutPlan[] = await prisma.workoutPlan.findMany({
  //   where: {
  //     OR: whereClause,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  //   include: {
  //     WorkoutPlanExercise: {
  //       select: {
  //         sets: true,
  //         reps: true,
  //         exerciseDuration: true,
  //         order: true,
  //         Exercise: {
  //           select: {
  //             id: true,
  //             name: true,
  //             category: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // });

  // const userRoutines = routines.filter((routine) => !routine.isSystemRoutine);
  // const systemRoutines = routines.filter((routine) => routine.isSystemRoutine);

  return (
    <div className="page-container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <PageHeading title="Start Workout" />

        {/* <Button
          as={Link}
          href="/edit-routine/step-1"
          color="primary"
          className="gap-unit-1 mb-3"
        >
          <IconPlus size={16} /> New Routine
        </Button> */}
      </div>
      {/* <h2 className="font-semibold text-xl md:text-[22px] mb-5 mt-5">
        Your Routines
      </h2>
      {userRoutines.length > 0 ? (
        <RoutineCards routines={userRoutines} isSystem={false} />
      ) : (
        <p>
          No routines have been created.{" "}
        <Link className="text-danger dark:text-danger" href="/edit-routine/step-1">
          Click here to create one
        </Link>
        .</p>
      )}
      

      <h3 className="font-semibold text-xl md:text-[22px] mb-5 mt-10">
        Suggested Routines
      </h3>
      <RoutineCards routines={systemRoutines} isSystem={true} /> */}
    </div>
  );
}
