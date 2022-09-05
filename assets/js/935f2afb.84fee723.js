"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"About OpenLineage","href":"/docs/","docId":"index"},{"type":"link","label":"Getting Started","href":"/docs/getting-started","docId":"getting-started"},{"type":"category","label":"Core Specification","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Object Model","href":"/docs/spec/object-model","docId":"spec/object-model"},{"type":"link","label":"Naming Conventions","href":"/docs/spec/naming","docId":"spec/naming"},{"type":"link","label":"The Run Cycle","href":"/docs/spec/run-cycle","docId":"spec/run-cycle"},{"type":"category","label":"Facets & Extensibility","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Column Level Lineage Facet","href":"/docs/spec/facets/column_lineage_facet","docId":"spec/facets/column_lineage_facet"}],"href":"/docs/spec/facets/"},{"type":"link","label":"Producers","href":"/docs/spec/producers","docId":"spec/producers"},{"type":"link","label":"Working with Schemas","href":"/docs/spec/schemas","docId":"spec/schemas"}]},{"type":"category","label":"Client Libraries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Java","href":"/docs/client/java","docId":"client/java"},{"type":"link","label":"Python","href":"/docs/client/python","docId":"client/python"}]},{"type":"category","label":"Integrations","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Integrating With OpenLineage","href":"/docs/integrations/about","docId":"integrations/about"},{"type":"category","label":"Apache Spark","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quickstart with Jupyter","href":"/docs/integrations/spark/quickstart_local","docId":"integrations/spark/quickstart_local"},{"type":"link","label":"Quickstart with Databricks","href":"/docs/integrations/spark/quickstart_databricks","docId":"integrations/spark/quickstart_databricks"},{"type":"link","label":"Column Level Lineage","href":"/docs/integrations/spark/spark_column_lineage","docId":"integrations/spark/spark_column_lineage"}],"href":"/docs/integrations/spark/"},{"type":"category","label":"Apache Airflow","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Custom extractors","href":"/docs/integrations/airflow/extractor","docId":"integrations/airflow/extractor"},{"type":"link","label":"Manually annotated lineage","href":"/docs/integrations/airflow/manual","docId":"integrations/airflow/manual"},{"type":"link","label":"Using OpenLineage with older versions of Airflow","href":"/docs/integrations/airflow/older","docId":"integrations/airflow/older"}],"href":"/docs/integrations/airflow/"},{"type":"link","label":"Apache Flink","href":"/docs/integrations/flink","docId":"integrations/flink"},{"type":"link","label":"dbt","href":"/docs/integrations/dbt","docId":"integrations/dbt"},{"type":"link","label":"Great Expectations","href":"/docs/integrations/great-expectations","docId":"integrations/great-expectations"}]},{"type":"category","label":"Development","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Developing With OpenLineage","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Python","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup a development environment","href":"/docs/development/developing/python/setup","docId":"development/developing/python/setup"},{"type":"category","label":"Tests","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Client","href":"/docs/development/developing/python/tests/client","docId":"development/developing/python/tests/client"},{"type":"link","label":"Airflow","href":"/docs/development/developing/python/tests/airflow","docId":"development/developing/python/tests/airflow"},{"type":"link","label":"Common","href":"/docs/development/developing/python/tests/common","docId":"development/developing/python/tests/common"},{"type":"link","label":"Dagster","href":"/docs/development/developing/python/tests/dagster","docId":"development/developing/python/tests/dagster"}]}]},{"type":"category","label":"Java","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup a development environment","href":"/docs/development/developing/java/setup","docId":"development/developing/java/setup"}]}],"href":"/docs/development/developing/"},{"type":"link","label":"Example Lineage Events","href":"/docs/development/examples","docId":"development/examples"},{"type":"link","label":"SQL parser","href":"/docs/development/sql","docId":"development/sql"}]},{"type":"link","label":"Frequently Asked Questions","href":"/docs/faq","docId":"faq"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"About These Guides","href":"/docs/guides/about","docId":"guides/about"},{"type":"link","label":"Using OpenLineage with Spark","href":"/docs/guides/spark","docId":"guides/spark"},{"type":"link","label":"Using OpenLineage with Airflow","href":"/docs/guides/airflow","docId":"guides/airflow"},{"type":"link","label":"Backfilling Airflow DAGs Using Marquez","href":"/docs/guides/airflow-backfill-dags","docId":"guides/airflow-backfill-dags"},{"type":"link","label":"Using Marquez with dbt","href":"/docs/guides/dbt","docId":"guides/dbt"}]}]},"docs":{"client/java":{"id":"client/java","title":"Java","description":"The Java client is a SDK for Java programming language that users can use to generate and emit OpenLineage events to OpenLineage backends.","sidebar":"tutorialSidebar"},"client/python":{"id":"client/python","title":"Python","description":"Overview","sidebar":"tutorialSidebar"},"development/developing/developing":{"id":"development/developing/developing","title":"Developing With OpenLineage","description":"As there are hundreds and possibly thousands databases, query engines and other tools you could use to process, create and move data, there\'s great chance that existing OpenLineage integration won\'t cover your needs.","sidebar":"tutorialSidebar"},"development/developing/java/setup":{"id":"development/developing/java/setup","title":"Setup a development environment","description":"This page needs your contribution! Please contribute new examples using the edit link at the bottom.","sidebar":"tutorialSidebar"},"development/developing/python/setup":{"id":"development/developing/python/setup","title":"Setup a development environment","description":"There are four Python OpenLineage packages that you can install locally when setting up a development environment.","sidebar":"tutorialSidebar"},"development/developing/python/tests/airflow":{"id":"development/developing/python/tests/airflow","title":"Airflow","description":"OpenLineage provides an integration with Apache Airflow. As Airflow is actively developed and major changes happen quite often it is advised to test OpenLineage integration against multiple Airflow versions. In the current CI process OpenLineage is tested against following versions:","sidebar":"tutorialSidebar"},"development/developing/python/tests/client":{"id":"development/developing/python/tests/client","title":"Client","description":"This page needs your contribution! Please contribute new examples using the edit link at the bottom.","sidebar":"tutorialSidebar"},"development/developing/python/tests/common":{"id":"development/developing/python/tests/common","title":"Common","description":"This page needs your contribution! Please contribute new examples using the edit link at the bottom.","sidebar":"tutorialSidebar"},"development/developing/python/tests/dagster":{"id":"development/developing/python/tests/dagster","title":"Dagster","description":"This page needs your contribution! Please contribute new examples using the edit link at the bottom.","sidebar":"tutorialSidebar"},"development/examples":{"id":"development/examples","title":"Example Lineage Events","description":"This page needs your contribution! Please contribute new examples using the edit link at the bottom.","sidebar":"tutorialSidebar"},"development/sql":{"id":"development/sql","title":"SQL parser","description":"SQL is the most widely used data processing language and for a lot of use cases, getting lineage from SQL-based tasks is solving majority of the problem.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"This page needs your contribution! Please contribute new questions (or answers) using the edit link at the bottom.","sidebar":"tutorialSidebar"},"getting-started":{"id":"getting-started","title":"Getting Started","description":"This page is in need of some refactoring. Suggestions are welcome using the Edit link at the bottom.","sidebar":"tutorialSidebar"},"guides/about":{"id":"guides/about","title":"About These Guides","description":"The following tutorials take you through the process of exploiting the lineage metadata provided by Marquez and OpenLineage to solve common data engineering problems and make new analytical and historical insights into your pipelines.","sidebar":"tutorialSidebar"},"guides/airflow":{"id":"guides/airflow","title":"Using OpenLineage with Airflow","description":"This tutorial introduces you to using OpenLineage with Airflow. OpenLineage has various integrations that will enable airflow to emit OpenLineage events when using Airflow Integrations. In this tutorial, you will be running a local instance of Airflow using docker compose, and learn how to enable and setup OpenLineage to emit data lineage events. The tutorial will use two backends to check the data lineage, 1) using OpenLineage Proxy, and 2) using Marquez.","sidebar":"tutorialSidebar"},"guides/airflow-backfill-dags":{"id":"guides/airflow-backfill-dags","title":"Backfilling Airflow DAGs Using Marquez","description":"Adapted from a blog post by Willy Lulciuc","sidebar":"tutorialSidebar"},"guides/dbt":{"id":"guides/dbt","title":"Using Marquez with dbt","description":"Adapted from a blog post by Ross Turk","sidebar":"tutorialSidebar"},"guides/spark":{"id":"guides/spark","title":"Using OpenLineage with Spark","description":"Adapted from a blog post by Michael Collado","sidebar":"tutorialSidebar"},"index":{"id":"index","title":"About OpenLineage","description":"OpenLineage is an open framework for data lineage collection and analysis. At its core is an extensible specification that systems can use to interoperate with lineage metadata.","sidebar":"tutorialSidebar"},"integrations/about":{"id":"integrations/about","title":"Integrating With OpenLineage","description":"This page has not yet been written! You\'re welcome to contribute using the Edit link at the bottom.","sidebar":"tutorialSidebar"},"integrations/airflow/airflow":{"id":"integrations/airflow/airflow","title":"Apache Airflow","description":"Airflow is a widely-used workflow automation and scheduling platform that can be used to author and manage data pipelines. Airflow uses workflows made of directed acyclic graphs (DAGs) of tasks. To learn more about Airflow, check out the Airflow documentation.","sidebar":"tutorialSidebar"},"integrations/airflow/extractor":{"id":"integrations/airflow/extractor","title":"Custom extractors","description":"OpenLineage integration works by detecting which Airflow operators your dag is using, and extracting lineage","sidebar":"tutorialSidebar"},"integrations/airflow/manual":{"id":"integrations/airflow/manual","title":"Manually annotated lineage","description":"This feature is only supported with Airflow versions greater than 2.1.0)","sidebar":"tutorialSidebar"},"integrations/airflow/older":{"id":"integrations/airflow/older","title":"Using OpenLineage with older versions of Airflow","description":"For Airflow 2.3+ OpenLineage integration automatically registers itself. Nothing else is required besides specifying where OpenLineage events should end up. However, some additional configuration is required for older OpenLineage versions.","sidebar":"tutorialSidebar"},"integrations/dbt":{"id":"integrations/dbt","title":"dbt","description":"dbt (data build tool) is a powerful transformation engine. It operates on data already within a warehouse, making it easy for data engineers to build complex pipelines from the comfort of their laptops. While it doesn\u2019t perform extraction and loading of data, it\u2019s extremely powerful at transformations.","sidebar":"tutorialSidebar"},"integrations/flink":{"id":"integrations/flink","title":"Apache Flink","description":"This integration is considered experimental: only specific workflows and use cases are supported.","sidebar":"tutorialSidebar"},"integrations/great-expectations":{"id":"integrations/great-expectations","title":"Great Expectations","description":"Great Expectations is a robust data quality tool. It runs suites of checks, called expectations, over a defined dataset. This dataset can be a table in a database, or a Spark or Pandas dataframe. Expectations are run by checkpoints, which are configuration files that describe not just the expectations to use, but also any batching, runtime configurations, and, importantly, the action list of actions run after the expectation suite completes.","sidebar":"tutorialSidebar"},"integrations/spark/quickstart_databricks":{"id":"integrations/spark/quickstart_databricks","title":"Quickstart with Databricks","description":"Open Lineage\'s can be installed on Databricks leveraging init scripts. Please note, Databricks on Google Cloud does not currently support the DBFS CLI so the proposed solution will not work for Google Cloud until that feature is enabled.","sidebar":"tutorialSidebar"},"integrations/spark/quickstart_local":{"id":"integrations/spark/quickstart_local","title":"Quickstart with Jupyter","description":"Trying out the Spark integration is super easy if you already have Docker Desktop and git installed.","sidebar":"tutorialSidebar"},"integrations/spark/spark":{"id":"integrations/spark/spark","title":"Apache Spark","description":"Spark jobs typically run on clusters of machines. A single machine hosts the \\"driver\\" application,","sidebar":"tutorialSidebar"},"integrations/spark/spark_column_lineage":{"id":"integrations/spark/spark_column_lineage","title":"Column Level Lineage","description":"Column level lineage for Spark is turned on by default and requires no additional work to be done. The following documentation describes its internals.","sidebar":"tutorialSidebar"},"spec/facets/column_lineage_facet":{"id":"spec/facets/column_lineage_facet","title":"Column Level Lineage Facet","description":"Column level lineage provides fine grained information on datasets\' dependencies. Not only we know the dependency exist, but we are also able to understand which input columns are used to produce output columns. This allows answering questions like Which root input columns are used to construct column x?","sidebar":"tutorialSidebar"},"spec/facets/facets":{"id":"spec/facets/facets","title":"Facets & Extensibility","description":"This page has not yet been written! You\'re welcome to contribute using the Edit link at the bottom.","sidebar":"tutorialSidebar"},"spec/naming":{"id":"spec/naming","title":"Naming Conventions","description":"This page has some initial content but is not yet complete. Contribute are welcome via the Edit link below.","sidebar":"tutorialSidebar"},"spec/object-model":{"id":"spec/object-model","title":"Object Model","description":"This page has not yet been written! You\'re welcome to contribute using the Edit link at the bottom.","sidebar":"tutorialSidebar"},"spec/producers":{"id":"spec/producers","title":"Producers","description":"This page has not yet been written! You\'re welcome to contribute using the Edit link at the bottom.","sidebar":"tutorialSidebar"},"spec/run-cycle":{"id":"spec/run-cycle","title":"The Run Cycle","description":"This page has not yet been written! You\'re welcome to contribute using the Edit link at the bottom.","sidebar":"tutorialSidebar"},"spec/schemas":{"id":"spec/schemas","title":"Working with Schemas","description":"This page has not yet been written! You\'re welcome to contribute using the Edit link at the bottom.","sidebar":"tutorialSidebar"}}}')}}]);