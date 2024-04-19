import { useEffect,useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

function PluginStatusChecker( pluginSlug) {
  const [loading, setLoading] = useState(null);

  const [pluginStatus, setPluginStatus] = useState({'isActive':null,'isInstalled':null});

  useEffect(() => {
    const fetchPluginStatus = async () => {
      try {


      await apiFetch(  {
            path:'/wp/v2/plugins',
            method: 'GET',
        }).then( ( plugins ) => {
          console.log();
                const plugin = plugins.find((plugin) => plugin.plugin === pluginSlug);
                if (plugin) {
                    setPluginStatus({'isInstalled':true,'isActive':plugin.status === 'active'});
                    setLoading(true);

                  }else{
                    setPluginStatus({'isInstalled':false,'isActive':false});
                    setLoading(false);
                  }

        } ) .catch(error => {
            // Handle errors
           console.error('Error in api request:', error);
        });


      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPluginStatus();
  }, [pluginSlug]);

  return (pluginStatus);
}
export { PluginStatusChecker };
