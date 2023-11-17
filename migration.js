'use strict';

module.exports = async ({migration,stackSDKInstance, managementAPIClient}) => {
    const getPublishEntriesTask = contentTypeUID => {
        return {
          title: `Publish entries for Content type '${contentTypeUID}'`,
          successMessage: `Entries published successfully for '${contentTypeUID}'`,
          failedMessage: `Failed to publish entries for '${contentTypeUID}'`,
          task: async params => {
            try {
              let baseStackEntry = await stackSDKInstance
              .contentType(contentTypeUID).entry().query(params).find()
                .query(params)
                .find()
              let targetStack = await managementAPIClient.stack({api_key:'bltf3ba30bb6dc9dd72'}).contentType(contentTypeUID).entry().query().find()
              const totalCount = baseStack.count;
              const numberOfIteration = parseInt(totalCount/(params.batch))
              const leftOver = totalCount % (params.batch)

            console.log(totalCount,numberOfIteration,leftOver)

              for (let index = 0; index < numberOfIteration; index++) {
                let baseStack = await stackSDKInstance.contentType(contentTypeUID).entry().query({limit: params.batch, skip: index*(params.batch)}).find()
                const entries = baseStack.items
                for(let innerIndex = 0; innerIndex < entries.length; innerIndex++){
                    const entry = entries[innerIndex]
                    //if entry with the identifier flag is present then move on
                    if(checkIfExist){
                      continue
                    }else{
                      // create entry with checks for the entry of its references
                      // publish the entry with the identifier
                    }
                }
              }
            } catch (error) {
              console.log(error)
            }
          },
        }
      }
      const contentUID = 'entries'
      migration.addTask(getPublishEntriesTask(contentUID).task({include_count:true, skip:9999999}))
}