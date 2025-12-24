CREATE TABLE "menu" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"description" text,
	"has_variation" boolean DEFAULT false,
	"price_base" numeric,
	"variations" jsonb,
	"active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "menu_name_unique" UNIQUE("name")
);
